'use client'

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductURL=(url:string) =>{
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(hostname.includes("amazon.in")||hostname.includes("amazon.")||
    hostname.includes("amazon"))
    {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
}

const searchbar = () => {
  const [searchPrompt, setsearchPrompt] = useState('');
  const [isLoading, setisLoading] = useState(false);
    const handleSubmit= async(event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();

      const isValidLink = isValidAmazonProductURL(searchPrompt);

      alert(isValidLink ? 'Valid link' : 'Invalid link')
      if (!isValidLink) return alert('Please providea valid amazone link')
        
        try {
            setisLoading(true);
            //Scrape the product
            const product = await scrapeAndStoreProduct(searchPrompt);
            
        } catch (error) {
          console.log(error);
          
        }finally{
          setisLoading(false);
        }
      
    }
  return (
     <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setsearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button 
        type="submit" 
        className="searchbar-btn"
        disabled={searchPrompt===''}
      >
        {isLoading ? 'Searching' : 'Search'}
      </button>
    </form>
  )
}

export default searchbar