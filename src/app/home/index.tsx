import { useState, useEffect, useId, useRef } from "react";
import {
  Alert,
  View,
  SectionList,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { styles } from "@/app/home/style";
import { Input } from "@/components/input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Contact, ContactProps } from "@/components/contact";
import * as Contacts from "expo-contacts";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Avatar } from "@/components/avatar";

type SectionListDataProps = {
  title: string;
  data: ContactProps[];
};

export function Home() {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState<SectionListDataProps[]>([]);
  const [contact, setContact] = useState<Contacts.Contact>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  async function handleOpenDetails(id: string) {
    const response = await Contacts.getContactByIdAsync(id);
    setContact(response);
    handleBottomSheetOpen();
  }

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync({
          name: name || undefined,
          sort: "firstName",
        });
        const list = data
          .map((contact) => ({
            id: contact.id ?? useId(),
            name: contact.firstName ?? "No name",
            image: contact.image,
          }))
          .reduce<SectionListDataProps[]>((acc, contact) => {
            const firstLetter = contact.name[0].toUpperCase();
            const existingEntry = acc.find(
              (entry) => entry.title === firstLetter
            );

            if (existingEntry) {
              existingEntry.data.push(contact);
            } else {
              acc.push({ title: firstLetter, data: [contact] });
            }
            return acc;
          }, []);

        setContacts(list);
        setContact(data[0]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to load contacts");
    }
  }

  useEffect(() => {
    fetchContacts();
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input style={styles.input}>
          <Feather name="search" size={16} color={theme.colors.gray_300} />
          <Input.Field
            placeholder="Search contacts"
            onChangeText={setName}
            value={name}
          />
          <Feather
            name="x"
            size={16}
            color={theme.colors.gray_300}
            onPress={() => setName("")}
          />
        </Input>
      </View>

      <SectionList
        sections={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact
            contact={item}
            onPress={() => {
              handleOpenDetails(item.id);
            }}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.section}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {contact && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[0.01, 284]}
          handleComponent={() => null}
          backgroundStyle={styles.bottom}
        >
          {/* <BottomSheetView style={styles.contentContainer}> */}
          <Avatar
            name={contact.firstName}
            image={contact.image}
            variant="large"
            containerStyle={styles.image}
          />
          <View style={styles.bottomSheetContent}>
            <Text style={styles.contactName}>{contact?.firstName}</Text>
            {contact.phoneNumbers && (
              <View style={styles.phoneNumber}>
                <Feather name="phone" size={18} color={theme.colors.blue} />
                <Text style={styles.phone}>
                  {contact?.phoneNumbers[0].number}
                </Text>
              </View>
            )}
            <TouchableOpacity style={styles.close} onPress={handleBottomSheetClose}>
              <Text style={styles.call}>Ligar</Text>
            </TouchableOpacity>
          </View>

          {/* </BottomSheetView> */}
        </BottomSheet>
      )}
    </View>
  );
}
