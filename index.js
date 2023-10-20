
//revers letters

const inputName = prompt(`Enter a letter you want to revers`)

const revresLetter = () => {
        document.write(inputName + '\n')
        
        const secInputName = inputName.split('');
        const result = inputName;
        const resultLetter = result.split('')
        let j = 0;

        for(let i = (secInputName.length - 1); i >= 0; i--)
        {
           
            resultLetter[j] = secInputName[i]
            document.write(resultLetter[j])
            j = j + 1;    
           
        }

        
}

revresLetter()
