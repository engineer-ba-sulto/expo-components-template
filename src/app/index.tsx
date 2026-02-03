import { Text, View } from "react-native";
import CalendarStrip from "@/components/calendar-strip";
import useCalendar from "@/components/calendar-strip/hooks/use-calendar";

export default function Index() {
  const { days, setActiveIndex } = useCalendar();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <CalendarStrip days={days} onSelectDate={setActiveIndex} />
    </View>
  );
}
