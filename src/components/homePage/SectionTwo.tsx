import * as React from "react";
import SectionTwoBlock from "@/components/homePage/SectionTwoBlock";

function SectionTwo() {
  return (
    <div className="flex flex-col items-start justify-between gap-16 pb-48">
      <div className="max-w-[1013px] text-6xl">
        Наша ціль <span className="text-[#2214e1]">спростити комунікацію</span>{" "}
        волонтерів та волонтерських{" "}
        <span className="text-[#2214e1]">організацій</span>
      </div>

      <div className="flex items-center justify-between gap-10">
        <SectionTwoBlock
          title={"Легка комунікація"}
          description={
            "За допомогою цієї платформи ви можете\n" +
            "оперативно дізнаватись де потрібна допомога\n" +
            "і кожен охочий може долучитись до організації,\n" +
            "або волонтерського заходу для допомоги"
          }
          icon={"/Section_2_block_1.svg"}
        />

        <SectionTwoBlock
          title={"Публікація актуальних зборів"}
          description={
            "Ви можете опублікувати свій збір,а також \n" +
            "переглядати актуальні збори та донатити\n" +
            "туди"
          }
          icon={"/Section_2_block_2.svg"}
        />

        <SectionTwoBlock
          title={"Мапа допомоги "}
          description={
            "Це мапа на якій в реальному часі показують\n" +
            "центри допомоги такі як пукти збору крові, а\n" +
            "також отримати необхідну гуманітарну та \n" +
            "психологічну допомогу"
          }
          icon={"/Section_2_block_3.svg"}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
