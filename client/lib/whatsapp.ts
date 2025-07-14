// WhatsApp Business Integration for Saree Mahal

const WHATSAPP_BUSINESS_NUMBER = "+919426617601"; // Store's WhatsApp Business number

interface ProductInfo {
  name: string;
  price: string;
  category?: string;
  image?: string;
}

export const generateWhatsAppURL = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER.replace(/\+/g, "")}?text=${encodedMessage}`;
};

export const generateProductInquiry = (product: ProductInfo): string => {
  const message = `Hi! I'm interested in the following saree:

🌟 *${product.name}*
💰 Price: ${product.price}
${product.category ? `📂 Category: ${product.category}` : ""}

Could you please provide more details and availability?

Thank you!`;

  return generateWhatsAppURL(message);
};

export const generateQuickBuyMessage = (product: ProductInfo): string => {
  const message = `Hi! I'm interested in buying this saree:

🛍️ *ORDER NOW REQUEST*
🌟 Product: ${product.name}
💰 Price: ${product.price}
${product.category ? `📂 Category: ${product.category}` : ""}
${product.image ? `📸 Product Image: ${product.image}` : ""}

Please confirm availability and delivery details.

Thank you!`;

  return generateWhatsAppURL(message);
};

export const generateGeneralInquiry = (): string => {
  const message = `Hi Shree Balaji Fab! 👋

I'm interested in exploring your saree collection. Could you please help me with:

✨ Available designs
💰 Pricing information
📦 Delivery options
🏪 Store visit details

Looking forward to hearing from you!`;

  return generateWhatsAppURL(message);
};

export const generateStoreVisitInquiry = (): string => {
  const message = `Hi! I would like to visit your store. 

🏪 Could you please confirm:
⏰ Store timings
📍 Exact location
🚗 Parking availability
📞 Should I make an appointment?

Thank you!`;

  return generateWhatsAppURL(message);
};

export const generateCustomInquiry = (customMessage: string): string => {
  const message = `Hi Shree Balaji Fab! 👋

${customMessage}

Thank you!`;

  return generateWhatsAppURL(message);
};

// Helper function to open WhatsApp in new tab/window
export const openWhatsApp = (url: string): void => {
  window.open(url, "_blank");
};

// React hook for WhatsApp integration
export const useWhatsApp = () => {
  const sendProductInquiry = (product: ProductInfo) => {
    const url = generateProductInquiry(product);
    openWhatsApp(url);
  };

  const sendQuickBuy = (product: ProductInfo) => {
    const url = generateQuickBuyMessage(product);
    openWhatsApp(url);
  };

  const sendGeneralInquiry = () => {
    const url = generateGeneralInquiry();
    openWhatsApp(url);
  };

  const sendStoreVisitInquiry = () => {
    const url = generateStoreVisitInquiry();
    openWhatsApp(url);
  };

  const sendCustomInquiry = (message: string) => {
    const url = generateCustomInquiry(message);
    openWhatsApp(url);
  };

  return {
    sendProductInquiry,
    sendQuickBuy,
    sendGeneralInquiry,
    sendStoreVisitInquiry,
    sendCustomInquiry,
  };
};
