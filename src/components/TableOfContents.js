import React, { useRef, useState, useEffect } from "react";

const useHeadingsData = (activeKey, setActiveId) => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const parentID = document.querySelector("#" + activeKey);
    if (parentID) {
    const headingElements = Array.from(parentID.querySelectorAll("h2, h3"));
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);

    if (nestedHeadings.length > 0) {
      setActiveId(nestedHeadings[0].id);
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [activeKey, setActiveId]);

  const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });

    return nestedHeadings;
  };

  return { nestedHeadings };
};

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          // Conditionally render subheadings only when the parent heading is active
          (heading.id === activeId || heading.items.some(item => item.id === activeId)) && (
            <ul>
              {heading.items.map((child) => (
                <li
                  key={child.id}
                  className={child.id === activeId ? "active" : ""}
                >
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )
        )}
      </li>
    ))}
  </ul>
);

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  console.log(headingElementsRef);
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      const firstVisibleHeading = visibleHeadings.find((heading) =>
        getIndexFromId(heading.target.id) > -1
      );

      if (firstVisibleHeading) {
        setActiveId(firstVisibleHeading.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};


const TableOfContents = ({ activeKey }) => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData(activeKey, setActiveId);
  useIntersectionObserver(setActiveId);

  const tocRef = useRef(null);

  // Function to calculate the fade-in and fade-out effect based on scroll position
  const calculateFadeEffect = () => {
    if (!tocRef.current) return;
    const tocElement = tocRef.current;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const tocTop = tocElement.offsetTop;
    const tocBottom = tocTop + tocElement.clientHeight;
  
    const scrollPosition = scrollY + windowHeight/2;
  
    if (scrollPosition > tocTop && scrollPosition < tocBottom) {
      // If the scroll position is within the TOC element, fade it in
      tocElement.classList.add("fade-in");
    } else {
      // If the scroll position is outside the TOC element, fade it out
      tocElement.classList.remove("fade-in");
    }
  };

  useEffect(() => {
    calculateFadeEffect();
    window.addEventListener("scroll", calculateFadeEffect);
    return () => {
      window.removeEventListener("scroll", calculateFadeEffect);
    };
  }, []);

  return (
    <nav
      aria-label="Table of Contents"
      className={`toc-container ${activeId ? "fade-in" : ""} ${activeId ? "fade-out" : ""}`}
      ref={tocRef}
    >
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

export default TableOfContents;