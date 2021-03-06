import React from "react"
import { View, StyleSheet, TextStyles } from "@mathieudutour/react-sketchapp"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"
import AccessibilityTest from "./AccessibilityTest"
import AccessibilityVisibility from "./AccessibilityVisibility"

export default class AccessibilityNested extends React.Component {
  render() {


    let AccessibilityTest$checkboxValue
    let AccessibilityTest$onToggleCheckbox
    let AccessibilityVisibility$showText

    AccessibilityTest$checkboxValue = this.props.isChecked
    AccessibilityVisibility$showText = this.props.isChecked
    AccessibilityTest$onToggleCheckbox = this.props.onChangeChecked
    return (
      <View style={styles.container}>
        <AccessibilityTest
          checkboxValue={AccessibilityTest$checkboxValue}
          customTextAccessibilityLabel={"Text"}
          onToggleCheckbox={AccessibilityTest$onToggleCheckbox}

        />
        <AccessibilityVisibility showText={AccessibilityVisibility$showText} />
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  accessibilityTest: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  accessibilityVisibility: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  }
})