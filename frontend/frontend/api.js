const API_URL = "http://localhost:5000/api/persons"; 

export const addPerson = async (personData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(personData),
        });
        return response.json();
    } catch (error) {
        console.error("❌ Error adding person:", error);
    }
};

export const getPersons = async () => {
    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.error("❌ Error fetching persons:", error);
    }
};
