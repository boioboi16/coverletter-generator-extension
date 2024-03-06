// Assuming extractTextFromPDF is imported from a TypeScript-compatible module or declaration file is provided
import extractTextFromPDF from "pdf-parser-client-side";

console.log("hey");

// When querying DOM elements, it's a good practice to type check the result of querySelector.
const form = document.querySelector('form');
console.log(form);

// Ensure form is not null before adding event listener to avoid runtime errors.
form?.addEventListener("change", handleChange);

// Use the Event type for the event parameter. More specific event types can be used for more specific events.
function handleChange(event: Event) {
  // The rest of the logic will go here.
  event.preventDefault();
  console.log("Form submitted");
  console.log(event);

  // To access files from an input element, you should type assert the element to HTMLInputElement.
  const input = document.getElementById('file') as HTMLInputElement;

  // Check if input.files is not null and has at least one file.
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    
    // Assuming extractTextFromPDF returns a promise, handle it with then/catch or async/await.
    
    extractTextFromPDF(file).then((data: any) => {
      console.log(data);
    }).catch((error: any) => {
      console.error("Error extracting text:", error);
    });

    // The commented out FileReader code is also valid, but if you're using extractTextFromPDF, it might be redundant.
  }
}

// Note: If extractTextFromPDF is not available as a TypeScript module,
// you may need to declare its type or install its type definitions if available.
