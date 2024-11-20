import Lottie from "lottie-react";
import FAQ from "../../../public/FAQ.json";

const FAQS = () => {
  return (
    <div className="container mx-auto p-4 mb-20">
      <h1 className="text-center text-3xl lg:text-4xl font-semibold my-4 mb-14">Frequently Asked <br className="md:hidden block" /> Questions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Animation (Lottie) */}
        <div className="flex justify-center items-center">
          <Lottie animationData={FAQ} className="w-full h-full max-w-md" />
        </div>

        {/* FAQ Accordion (Text) */}
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              What products do you offer on Mr. Fashion?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                Mr. Fashion offers a wide range of trendy clothing for men and women, including shirts, t-shirts, pants, jackets, dresses, and accessories. We focus on providing high-quality and fashionable items for all occasions.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              How do I place an order on Mr. Fashion?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                To place an order, simply browse our website, select the items you wish to purchase, choose your size, and click 'Add to Cart.' Once you're ready, proceed to checkout to enter your shipping and payment information.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                Mr. Fashion accepts a variety of payment methods, including credit/debit cards (Visa, MasterCard), PayPal, and Cash on Delivery in selected locations. All payments are processed securely to ensure your privacy.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              How can I track my order?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                After your order is shipped, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your order on the courier's website or through our order tracking page.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              Can I return or exchange an item?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                Yes, we offer a 30-day return and exchange policy for unworn, unwashed, and unused items. You can return or exchange any item by following the return process provided on our 'Returns & Exchanges' page.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              How do I find the right size?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                To help you find the perfect fit, we provide a size guide for each product. You can also check customer reviews for feedback on sizing. If you're still unsure, our customer support team is available to assist you.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-gray-800 bg-yellow-400 hover:bg-blue-200">
              Do you offer international shipping?
            </div>
            <div className="collapse-content text-gray-600 bg-gray-50">
              <p>
                Yes, Mr. Fashion ships internationally to most countries. Shipping fees and delivery times may vary depending on the location. You can check the shipping options available at checkout based on your delivery address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
