// pdf-parser-client-side.d.ts
declare module 'pdf-parser-client-side' {
  function extractTextFromPDF(file: File): Promise<any>;
  export = extractTextFromPDF;
}
