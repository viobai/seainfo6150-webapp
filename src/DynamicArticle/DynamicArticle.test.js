import React from "react";
import DynamicArticle from "./DynamicArticle";

describe("DynamicArticle tests", () => {
    it("renders correctly", () => {
        const article = {
                "title": "The Statue of Liberty's torch heads to new museum",
                "authorEmail": "kate.farley@nytimes.com",
                "author": "Kate Farley",
                "timeStamp": "2018-11-22T15:12:24.000Z",
                "displayDate": "November 22nd 2018, 7:12 am",
                "text": "<p>The Statue of Liberty's original torch is getting a new home.</p>",
                "image": {
                    "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"
                }
            };
        const { container } = render(<DynamicArticle article={article}/>);
        expect(container).toMatchSnapshot();
    });
});