import { addUser } from "./api"; // Replace with your actual API file

const axios=require("axios");
describe("API Functions", () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  test("addUser should make a POST request and return data", async () => {
    // Arrange
    const userData = { name: "John Doe", email: "john@example.com" };
    const expectedResponse = { id: 1, ...userData };

    mockAxios.onPost("http://localhost:8000/users").reply(200, expectedResponse);

    // Act
    const response = await addUser(userData);

    // Assert
    expect(response).toEqual(expectedResponse);
  });

  test("addUser should handle errors", async () => {
    // Arrange
    const userData = { name: "John Doe", email: "john@example.com" };
    const errorMessage = "Internal Server Error";

    mockAxios.onPost("http://localhost:8000/users").reply(500, {
      message: errorMessage,
    });

    // Act & Assert
    await expect(addUser(userData)).rejects.toThrow(errorMessage);
  });
});