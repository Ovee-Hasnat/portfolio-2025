import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export default function DrawerComponent() {
  return (
    <DrawerContent>
      <div className="max-w-screen-2xl mx-auto">
        <DrawerHeader>
          <DrawerTitle>Contact</DrawerTitle>
        </DrawerHeader>

        <div className="py-12"></div>
      </div>
    </DrawerContent>
  );
}
