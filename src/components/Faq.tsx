import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const Faq=()=>{

	  const faqData = [
		  {
			  title: "What is AudioBlocks?",
			  content: "AudioBlocks is an innovative music streaming platform designed to provide a seamless listening experience while connecting users with their favorite artists through unique features like tipping, exclusive content access, and more.",
		  },
		  {
			  title: "How does AudioBlocks support independent artists?",
			  content: "AudioBlocks allows users to discover and support independent artists directly through tips, music NFTs, and exclusive content, giving artists new opportunities to connect with their audience and monetize their work.",
		  },
		  {
			  title: "Can I use cryptocurrency for in-app purchases or tipping artists?",
			  content: "Yes, AudioBlocks provides an option to use cryptocurrency for in-app transactions, making it easy to support artists in new and flexible ways.",
		  },
		  {
			  title: "What makes AudioBlocks different from other streaming platforms?",
			  content: "AudioBlocks stands out with its focus on artist interaction, unique monetization features like music NFTs, and a user-friendly interface that ensures a high-quality, ad-free listening experience.",
		  },
		  {
			  title: "How can I discover new music on AudioBlocks?",
			  content: "AudioBlocks features a discovery section that highlights independent artists and curates playlists to help users explore fresh, new sounds.",
		  },
		  {
			  title: "How does tipping work on AudioBlocks?",
			  content: "Tipping is easy with AudioBlocks. Simply select the artist you want to support, choose the amount, and send your tip directly to the artist’s profile.",
		  },
	  ];
    return (
      <>
			<div className="md:w-11/12 w-full px-6 py-28 text-white font-roboto mx-auto">
				<h1 className="text-4xl text-center font-bold mb-8 text-[#F3B3E3] drop-shadow-lg">Have Questions?</h1>

				<Accordion type="single" collapsible className="space-y-5">
					{faqData.map((item, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`} className="border border-[#3B3B3B] rounded-lg bg-[#1B1B1B]/50 hover:bg-[#1B1B1B]/80 transition-all duration-300">
							<AccordionTrigger className="md:text-lg font-bold flex items-center justify-between px-6 py-4">
								{item.title}
							</AccordionTrigger>
							<AccordionContent className="text-base px-6 pb-4 text-gray-300">
								{item.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
      </>
    )
  }
  export default Faq;