const PersonsForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const exists = persons.some(p => p.name === newName);
    if (exists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName("")
    setNewNumber("")
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input value={newName} onChange={(e) => { setNewName(e.target.value) }} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => { setNewNumber(e.target.value) }} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonsForm