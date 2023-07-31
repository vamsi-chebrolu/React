import React from "react";
import { render, screen } from "@testing-library/react";
import { Certificate } from "../Certificate";

// Mocking the localStorage getItem method
jest.spyOn(window.localStorage._proto_, "getItem").mockReturnValue("user@example.com");

// Mocking the getOneUser function to return user data
jest.mock("./CrudCmps", () => ({
  getOneUser: jest.fn().mockResolvedValue({
    data: [
      {
        id: 1,
        username: "John Doe",
        userVacStatus: "yes",
        age: 30,
        phone: "1234567890",
        address: "123 Street, City",
        fathername: "John Doe Sr.",
        fatherVacStatus: "yes",
        mothername: "Jane Doe",
        motherVacStatus: "yes",
        fatherAge: 55,
        motherAge: 50,
      },
    ],
  }),
}));

describe("Certificate component", () => {
  test("renders vaccination details if userVacStatus is 'yes'", async () => {
    render(<Certificate />);

    // Wait for the data to be fetched and component to re-render
    await screen.findByText(/Vaccination Record Certificate/i);

    // Assertions
    expect(screen.getByText(/Vaccination Record Certificate/i)).toBeInTheDocument();
    expect(screen.getByText(/Beneficiary Name: John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Vaccine Status : yes/i)).toBeInTheDocument();
  });

  test("renders 'Your Status is not yet Updated' message if userSlotBooked is 'yes'", async () => {
    // Mocking the getOneUser function to return different data
    jest.spyOn(require("./CRUD/CrudCmps"), "getOneUser").mockResolvedValue({
      data: [
        {
          id: 1,
          userSlotBooked: "yes",
        },
      ],
    });

    render(<Certificate />);

    // Wait for the data to be fetched and component to re-render
    await screen.findByText(/Your Status is not yet Updated/i);

    // Assertions
    expect(screen.getByText(/Your Status is not yet Updated/i)).toBeInTheDocument();
  });

  test("renders 'You have not yet Booked the Slot' message if userVacStatus and userSlotBooked are not 'yes'", async () => {
    // Mocking the getOneUser function to return different data
    jest.spyOn(require("./CRUD/CrudCmps"), "getOneUser").mockResolvedValue({
      data: [
        {
          id: 1,
        },
      ],
    });

    render(<Certificate />);

    // Wait for the data to be fetched and component to re-render
    await screen.findByText(/You have not yet Booked the Slot/i);

    // Assertions
    expect(screen.getByText(/You have not yet Booked the Slot/i)).toBeInTheDocument();
  });
});