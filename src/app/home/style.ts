import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray_200,
  },
  header: {
    width: "100%",
    height: 132,
    backgroundColor: theme.colors.blue,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    zIndex: 1,
  },
  input: {
    marginBottom: -27,
  },
  section: {
    fontSize: 18,
    fontFamily: theme.fontFamily.bold,
    backgroundColor: theme.colors.blue,
    width: 34,
    height: 34,
    color: theme.colors.white,
    borderRadius: 12,
    marginTop: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  sectionText: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fontFamily.bold,
  },
  contentList: {
    padding: 24,
    gap: 12,
    paddingTop: 64,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.gray_300,
    marginTop: 12,
  },
  contentContainer: {

  },
  bottom: { backgroundColor: "transparent" },
  bottomSheetContent: {
    backgroundColor: theme.colors.gray_100,
    flex: 1,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    paddingTop: 64,
    alignItems: "center",
    padding: 32,
  },
  image: {
    marginBottom: -50,
    zIndex: 1,
    alignSelf: "center",
  },
  contactName: {
    fontSize: 32,
    fontFamily: theme.fontFamily.bold,
  },
  phoneNumber: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 12,
  },
  phone: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.blue,
  },
  close: {
    backgroundColor: theme.colors.blue,
    width: '100%',
    height: 60,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  call : {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fontFamily.bold
  }
});
