import { Seq } from 'immutable';

/**
 * Filters students with a score less than 70 and prints their first name and last name
 * with the first letter capitalized.
 * @param {Object} grades - The object containing student grades.
 */
export function printBestStudents(grades) {
    Seq(grades)
        // Filter students with a score less than 70
        .filter(student => student.score >= 70)
        // Map each student to a new object with capitalized first name and last name
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
        }))
        // Convert the Seq back to a plain JavaScript object
        .toObject()
        // Print the resulting object to the console
        .forEach(student => console.log(student));
}

