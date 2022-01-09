
const Manager = require('../lib/manager')

describe("Manager", () => {
    describe("getName", () => {
        it('should return the name of the Manager', () => {
            const newName = "Emily"

            const result = new Manager('Emily', 25, 'emb.burger@yahoo.com', 40).getName(newName)
            expect(result).toBe(newName)
        })
    })
    describe("officeNumber", () => {
        it('should return the office number of the manager', () => {
            const office = 40

            const result = new Manager('Emily', 25, 'emb.burger@yahoo.com', 40).getOfficeNumber(office)
            expect(result).toBe(office)
        })
    })
    describe("getRole", () => {
        it('should return the role of the manager', () => {
            const newRole = "Manager"

            const result = new Manager().getRole(newRole)
            expect(result).toBe(newRole)
        })
    })
})
