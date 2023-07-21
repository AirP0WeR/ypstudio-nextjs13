import { IsUserNavBar } from "@/utils/IsUserNavBar";
import { HeaderBar } from "@/components/headerBar.component";


export default function Header() {

  return (
    <header>
      <HeaderBar>
        <IsUserNavBar />
      </HeaderBar>


    </header>
  );
}

