// Library Imports
import { FC, ReactNode, useState } from "react";
// Components
import AccordionItem from "./dependents/components/AccordionItem";
// CSS
import "./dependents/css/accordion.scss";
// Assets and Images

export interface AccordionItemStrings {
  header: string;
  body: ReactNode;
}

export interface AccordionItemProps extends AccordionItemStrings {
  isCollapsed: boolean;
  index: number;
  setOpenItem: React.Dispatch<React.SetStateAction<number | null>>;
}

interface AccordionProps {
  accordionItems: AccordionItemStrings[];
}

const Accordion: FC<AccordionProps> = ({ accordionItems }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className="accordion full-flex flex-direction-column gap-20">
      {accordionItems.map((item, index) => (
        <AccordionItem
          header={item.header}
          body={item.body}
          isCollapsed={openItem === index ? false : true}
          index={index}
          setOpenItem={setOpenItem}
          key={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
