'use server';

export async function findAddress (zipcode: string) {
    console.log("Resolving zipcode...")
    if (zipcode === "88015300") {
        return {
            street: "Av. Trompowsky",
            neighborhood: "Centro",
            city: "Florianópolis",
            state: "SC",
            country: "Brasil"
        };
    }
    if (zipcode === "22060030") {
        return {
            street: "Rua Aires Saldanha",
            neighborhood: "Copacabana",
            city: "Rio de Janeiro",
            state: "RJ",
            country: "Brasil"
        };
    }
    return {};
}
