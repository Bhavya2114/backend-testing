const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Frontend HTML Tests", () => {

  let document;

  beforeEach(() => {

    const html = fs.readFileSync(
      path.resolve(__dirname, "../public/index.html"),
      "utf8"
    );

    const dom = new JSDOM(html);

    document = dom.window.document;
  });

  test("Heading should exist", () => {

    const heading = document.getElementById("title");

    expect(heading).not.toBeNull();

    expect(heading.textContent)
      .toBe("Hello Bhavya 🚀");
  });

  test("Button should exist", () => {

    const button = document.getElementById("btn");

    expect(button).not.toBeNull();

    expect(button.textContent)
      .toBe("Click Me");
  });

});