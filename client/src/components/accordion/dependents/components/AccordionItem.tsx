// Library Imports
import { FC, useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Interfaces and Types
import { AccordionItemProps } from "../../Accordion";

const AccordionItem: FC<AccordionItemProps> = ({
  header,
  body,
  isCollapsed,
  index,
  setOpenItem,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isCollapsed ? "0px" : `${contentRef.current.scrollHeight}px`);
    }
  }, [isCollapsed]);

  return (
    <div
      id={`accordion-item-${index}`}
      className={`accordion-item padding-bottom-20 ${!isCollapsed ? "active" : ""}`}
      onClick={() => setOpenItem(isCollapsed ? index : null)}
    >
      <div className="accordion-item-header display-flex align-items-center justify-content-space-between">
        <h4>{header}</h4>
        <FontAwesomeIcon
          className="accordion-item-icon padding-right-20"
          icon={isCollapsed ? faChevronDown : faChevronUp}
          size="xl"
        />
      </div>
      <div
        ref={contentRef}
        className="accordion-item-body"
        style={{ maxHeight: height }}
      >
        <div className="accordion-item-content">{body}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
