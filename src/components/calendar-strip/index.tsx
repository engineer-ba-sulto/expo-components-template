import type React from "react";
import { useEffect, useRef } from "react";
import {
  FlatList,
  type ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { Day } from "./types";

interface CalendarStripProps {
  days: Day[];
  onSelectDate: (index: number) => void;
}

// デザイン定数 (Web版のTailwindクラス w-12, gap-3 等に基づいています)
const ITEM_WIDTH = 48; // w-12
const ITEM_HEIGHT = 64; // h-16
const ITEM_GAP = 12; // gap-3
const CONTAINER_PADDING_X = 24; // px-6

const CalendarStrip: React.FC<CalendarStripProps> = ({
  days,
  onSelectDate,
}) => {
  const flatListRef = useRef<FlatList<Day>>(null);

  // アクティブな日付が変更されたら中央にスクロールする
  useEffect(() => {
    const activeIndex = days.findIndex((day) => day.isActive);
    if (activeIndex !== -1 && flatListRef.current) {
      // レイアウト計算完了を待つための安全策としてのsetTimeout
      // 実際の実装ではonLayoutを使用する場合もあります
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: activeIndex,
          animated: true,
          viewPosition: 0.5, // 0.5で画面の中央に配置
        });
      }, 100);
    }
  }, [days]); // daysの中身（isActive）が変わるたびに発火

  const renderItem: ListRenderItem<Day> = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelectDate(index)}
        activeOpacity={0.7}
        style={[
          styles.itemBase,
          item.isActive ? styles.itemActive : styles.itemInactive,
        ]}
      >
        <Text
          style={[
            styles.textDay,
            item.isActive ? styles.textBold : styles.textMedium,
          ]}
        >
          {item.day}
        </Text>
        <Text
          style={[
            styles.textDate,
            item.isActive ? styles.textBold : styles.textMedium,
          ]}
        >
          {item.date}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={days}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.day}-${item.date}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={{ width: ITEM_GAP }} />}
        // スナップ動作の設定
        snapToInterval={ITEM_WIDTH + ITEM_GAP}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16, // py-4
  },
  contentContainer: {
    paddingHorizontal: CONTAINER_PADDING_X, // px-6
    // 右端のスペース確保用 (Web版のspacer divの代わり)
    paddingRight: CONTAINER_PADDING_X + 12,
  },
  itemBase: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 16, // rounded-2xl
    alignItems: "center",
    justifyContent: "center",
  },
  itemActive: {
    backgroundColor: "#FFFFFF",
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android Shadow
    elevation: 5,
    transform: [{ scale: 1.1 }], // scale-110
    zIndex: 10,
  },
  itemInactive: {
    backgroundColor: "transparent",
    opacity: 0.4,
  },
  textDay: {
    fontSize: 12, // text-xs
    marginBottom: 4,
    color: "#2C2520", // text-primary
  },
  textDate: {
    fontSize: 18, // text-lg
    color: "#2C2520", // text-primary
  },
  textBold: {
    fontWeight: "700",
  },
  textMedium: {
    fontWeight: "500",
  },
});

export default CalendarStrip;
