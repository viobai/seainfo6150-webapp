import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
    it("renders correctly with two articles", () => {
        var articles = [
            {
                "title": "The Statue of Liberty's torch heads to new museum",
                "slug": "181122102925-statue-of-liberty-crown",
                "shortText": "The Statue of Liberty's original torch is getting a new home",
                "timeStamp": "2018-11-22T15:12:24.000Z",
                "displayDate": "November 22nd 2018, 7:12 am",
                "image": {
                    "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"
                }
            },
            {
                "title": "You can take a pie on a plane",
                "slug": "170321135754-airport-security-line",
                "shortText": "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
                "timeStamp": "2018-11-21T22:57:55.000Z",
                "displayDate": "November 21st 2018, 2:57 pm",
                "image": {
                    "_url": "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg"
                }
            }
        ];
        const { container } = render(<ArticleList articles={articles}/>);
        expect(container).toMatchSnapshot();
    });
});