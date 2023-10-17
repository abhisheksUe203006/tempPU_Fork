import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Assistant from "./Assistant";
import ComplaintAssign from "../../components/ComplaintAssign/ComplaintAssign";
import { useRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const Parent = () => {
  const route = useRoute();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Assistant"
        component={Assistant}
        // initialParams={{ ...route.params }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Complaint Assign"
        component={ComplaintAssign}
        // initialParams={{ complaintsList }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Parent;
