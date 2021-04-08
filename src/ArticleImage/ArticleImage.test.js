import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
    it("renders correctly", () => {
        const article = {
            "title": "The Statue of Liberty's torch heads to new museum",
            "image": {
                "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"
            }
        };
        const { container } = render(<ArticleImage url={article.image._url} title={article.title} />);
        expect(container).toMatchSnapshot();
    });
});