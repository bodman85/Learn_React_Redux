import { fireEvent, screen, render } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";

jest.mock("axios");

describe("<RandomUser/>", () => {
  it("loads user when the button is clicked", async () => {
    render(<RandomUser />);

    axios.get.mockResolvedValueOnce({data: MOKE_USER_RESPONSE});

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const titleEl = await screen.findByRole("heading", { level: 2 });
    //const titleEl = await screen.findByText("Gerald Sullivan"); //wait until this text really appears
    screen.debug(titleEl);
    expect(titleEl.textContent).toBe("Gerald Sullivan");
  });
});

const MOKE_USER_RESPONSE = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Gerald", last: "Sullivan" },
      location: {
        street: { number: 9604, name: "Spring St" },
        city: "Bridgeport",
        state: "Michigan",
        country: "United States",
        postcode: 69821,
        coordinates: { latitude: "83.2583", longitude: "-36.8008" },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "gerald.sullivan@example.com",
      login: {
        uuid: "6eefc16a-5b96-445b-b068-4620c831eb0e",
        username: "happyleopard354",
        password: "272727",
        salt: "uRIxpvST",
        md5: "50b8c0e90f322dddacbb8ceab8018b9c",
        sha1: "86e5ff4a3800ca3c70568bfd109d00fe5822f037",
        sha256:
          "98d9eba65e69d2b56502e45605990bce0d22911704cf0dc61772a78ffc311f3f",
      },
      dob: { date: "1966-06-23T02:35:31.572Z", age: 57 },
      registered: { date: "2005-01-12T05:38:24.064Z", age: 18 },
      phone: "(851) 296-0933",
      cell: "(567) 766-2799",
      id: { name: "SSN", value: "479-45-0325" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/5.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      },
      nat: "US",
    },
  ],
  info: { seed: "1308c24309e53edb", results: 1, page: 1, version: "1.4" },
};
