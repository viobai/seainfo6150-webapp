import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
    var article = {
        "title": "The Statue of Liberty's torch heads to new museum",
        "slug": "181122102925-statue-of-liberty-crown",
        "shortText": "The Statue of Liberty's original torch is getting a new home",
        "timeStamp": "2018-11-22T15:12:24.000Z",
        "displayDate": "November 22nd 2018, 7:12 am",
        "image": {
            "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"
        }
    };

    it("renders correctly", () => {  
        const { container } = render(<ArticleListItem article={article}/>);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly after button is clicked once", () => {
        const { container, getByText } = render(<ArticleListItem article={article}/>);
        const button = getByText("Show More");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly after button is clicked twice", () => {   
        const { container, getByText } = render(<ArticleListItem article={article}/>);
        const button = getByText("Show More");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });
});