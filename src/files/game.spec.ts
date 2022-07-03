import game from "../files/game";

const person = game("Yisus")

describe("game", () => {
    it("game should return the right object", () => {
        expect(person).toMatchObject({
            id: 1,
            name: "Yisus",
            description: "First game"
        })
    });
});