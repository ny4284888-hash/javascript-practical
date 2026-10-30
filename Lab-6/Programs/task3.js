const jsonText = '{"name":"NANDANI"}';

try {
    const student = JSON.parse(jsonText);
    console.log(student);
} catch (error) {
    console.log("Invalid JSON");
}
