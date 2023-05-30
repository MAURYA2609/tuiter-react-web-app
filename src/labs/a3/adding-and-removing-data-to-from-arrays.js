function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['Maurya', 'Atulbhai'];
    // adding new items
    numberArray1.push(6);
    stringArray1.push('Patel');

    // remove 1 item starting on 3rd spot
    numberArray1.splice(3, 2);
    stringArray1.splice(1, 1);

    return(
        <>
            <h3> Add and remove data from arrays</h3>
            numberArray1 = {numberArray1} <br/>
            stringArray1 = {stringArray1} <br/>
        </>
    )
}
export default AddingAndRemovingDataToFromArrays