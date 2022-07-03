import dummy from "../files/dummy";

const dummyMock = jest.fn(() => 1+2);


describe("dummy", () => {
    describe("when shouldTrigger is false", () => {
        it("should not call callback", () => {
            dummy(false, dummyMock)
            expect(dummyMock.mock.calls.length).toBe(0)
        });
    });
    describe("when shouldTrigger is true", () => {
        it("should call callback", () => {
            dummy(true, dummyMock)
            expect(dummyMock.mock.calls.length).toBe(1)
        });
    });
});