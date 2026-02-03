# Calendar Strip の使い方

## コンポーネント概要
`@/components/calendar-strip` は横スクロール式のカレンダーストリップを表示する React Native コンポーネントです。
`FlatList` を利用しており、アクティブ日付を中央に自動スクロールしつつ、タップで選択イベントを通知します。

## 主要なエクスポート
- `default` (`CalendarStrip`): `days` と `onSelectDate` を受け取る UI コンポーネント。
- `useCalendar`: `days` 配列とアクティブインデックス操作を提供するカスタムフック。
- `rawDays`: 表示用の初期データセット。
- `Day` 型: `day`, `date`, `isActive` をもつ型定義。

## 基本的な使い方
```tsx
import CalendarStrip from "@/components/calendar-strip";
import useCalendar from "@/components/calendar-strip/hooks/use-calendar";

const Example = () => {
  const { days, setActiveIndex } = useCalendar();

  return (
    <CalendarStrip
      days={days}
      onSelectDate={setActiveIndex}
    />
  );
};
```

1. `useCalendar` で `days` と `setActiveIndex` を取得します。
2. `days` を `CalendarStrip` に渡すと、`isActive` が `true` の要素が強調表示されます。
3. `onSelectDate` に `setActiveIndex` を渡すことで、ユーザー操作に応じてアクティブ日付が更新され、中央へスナップスクロールされます。

## Props 詳細
| Prop           | 型                        | 必須 | 説明                                                                       |
| -------------- | ------------------------- | ---- | -------------------------------------------------------------------------- |
| `days`         | `Day[]`                   | ✔    | 表示する日付データ。アクティブ要素を判断するため `isActive` を設定します。 |
| `onSelectDate` | `(index: number) => void` | ✔    | ユーザーがセルをタップした時に呼ばれ、選択されたインデックスが渡されます。 |

## データのカスタマイズ
- デフォルトの `rawDays` をベースに、`date-fns` などで動的に生成した値へ置き換えることができます。
- アクティブ日を任意に変更したい場合は、`useCalendar` の代わりに独自の `useState` と `useMemo` を用意し、`isActive` フラグを自前で制御してください。

```tsx
const [activeIndex, setActiveIndex] = useState(0);
const days = useMemo(
  () => customDays.map((day, index) => ({
    ...day,
    isActive: index === activeIndex,
  })),
  [customDays, activeIndex],
);
```

## UI 振る舞いの補足
- 各アイテム幅 (`48px`) とギャップ (`12px`) が固定なので、週単位のデータでも月単位でも同じ見た目が保たれます。
- アクティブアイテムはホワイト背景＋シャドウ＋`scale(1.1)` で強調されます。
- `FlatList` の `snapToInterval` と `snapToAlignment="center"` により、連続スクロールでもアイテムが中央に揃います。

## よくある拡張
- **開始位置の変更**: `useCalendar` 内の `useState(9)` を変更すると、初期表示のアクティブ日付を調整できます。
- **選択時の副作用**: `onSelectDate` ハンドラー内で API 呼び出しや状態更新を行い、タスク一覧など他の UI と連動させられます。
- **アクセシビリティ**: `TouchableOpacity` の `accessibilityRole` や `accessibilityLabel` を追加してスクリーンリーダー対応を強化できます。
