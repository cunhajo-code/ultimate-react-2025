import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [openItem, setOpenItem] = useState(null);

  // test code to demonstarte the highlightkeyword functionality enhancement I added
  //    modifies text in children prop to a valid jsx array to modify instances of a
  //    keyword to be wrapped in additional tags, in this case <em><strong>
  const highlighted = highlightKeyword(
    "provident provident foo Provident bar",
    "provident"
  );
  console.log(highlighted);

  //

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          openItem={openItem}
          onOpenItem={setOpenItem}
          key={i}
          title={el.title}
          num={i}
        >
          {/* {highlighted} */}
          {highlightKeyword(el.text, "provident")}
        </AccordionItem>
      ))}
      <AccordionItem
        openItem={openItem}
        onOpenItem={setOpenItem}
        key={3}
        title={"Children Prop Sample"}
        num={3}
      >
        <p>This item uses children prop to format message using direct jsx.</p>
        <em>
          <p>It also explains the steps which the highlightKeyword function,</p>
          <p>
            which was added with OpenAI assistance, uses to find a keyword and{" "}
          </p>
          <p>
            wrap them in additional tags whenevery found, in this case em and
            string
          </p>
        </em>
        <strong>
          <ul>
            <li>Uses map on the resulting array to itterate through </li>
            <li>
              Takes the string and the keyword that is sought as arguments.
            </li>
            <li>Splits the string using a case-insensitive RegExp</li>
            <li>
              the result is ["one ", <em>"keyword"</em>, " two ",{" "}
              <em>"keyword</em>", " three"]
            </li>
            <li>Uses JavaScript array map on the resulting array and:</li>
            <ul>
              <li>
                If a part matches the keyword, return the jsx like : &lt;em key=
                &#123;i&#125;&gt;&lt;strong&gt;&#123;part&#125;&lt;/strong&gt;&lt;/em&gt;&#123;"
                "&#125;
              </li>
              <li>Otherwise, it returns just the literal text of the part.</li>
            </ul>
            <li>
              Currently using the highlight Keyword function to itlaic an bold
              the keyword provident as in item 1
            </li>
            <li>
              Notice it has no effect on provident keyword in item since :
              <ul>
                <li>this item is dynamically created with the children prop</li>
                <li>it does not use message string and therefore</li>
                <li>does not call the highlightKeyword function.</li>
              </ul>
            </li>
          </ul>
        </strong>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, openItem, onOpenItem }) {
  const isOpen = num === openItem;

  function handleToggle() {
    onOpenItem(isOpen ? null : num);
    // setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

function highlightKeyword(text, keyword) {
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <em key={i}>
        <strong>{part}</strong>
      </em>
    ) : (
      part
    )
  );
}
