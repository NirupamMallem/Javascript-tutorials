// return number of vowels in a string.

const numberOfVowels=  (str1) =>
{
    str1.toLowerCase();
    for(const char of str1)
    {
        if(char == 'a' || char== "e" || char== "i" || char== "o"|| char== "u" )
        {
       counter++;
        }
    }

    return counter
}
let counter=0;
//ans = countVowels("aepli")
ans = numberOfVowels("aeibcd")
console.log("The count of Vowels is ",ans)