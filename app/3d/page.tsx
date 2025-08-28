import ColorPicker from "@/components/colorPicker";
import MainPageScene from "@/components/mainPageScene";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen py-2">
      <ColorPicker />
      <div className="flex items-center justify-center">
        <MainPageScene />
      </div>
    </main>
  );
}
