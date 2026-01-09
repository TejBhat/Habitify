import { useState } from "react";
import { View , Text} from "react-native";

export default function StreaksScreen(){
    const [habits,setHabits]=useState<string>();
    const [completedHabits,setCompletedHabits]=useState<string>();

 let  streak=0;
 let bestStreak=0;
 let lastDate:Date | null=null;

    return(
       <View>
        <Text>this is streaks</Text>
       </View>
    );
}