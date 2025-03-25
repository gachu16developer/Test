const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.get("/", async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (err) {
        res.status(500).json({ message: "Error fetching persons", error: err });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) return res.status(404).json({ message: "Person not found" });
        res.json(person);
    } catch (err) {
        res.status(500).json({ message: "Error fetching person by ID", error: err });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newPerson = new Person({ name, email, phone });
        await newPerson.save();

        res.status(201).json({ message: "Person added successfully", person: newPerson });
    } catch (err) {
        res.status(500).json({ message: "Error creating person", error: err });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Person not found" });
        res.json({ message: "Person updated successfully", person: updated });
    } catch (err) {
        res.status(500).json({ message: "Error updating person", error: err });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Person.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Person not found" });
        res.json({ message: "Person deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting person", error: err });
    }
});

module.exports = router;
