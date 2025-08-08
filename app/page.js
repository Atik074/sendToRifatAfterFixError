

export default function Home() {
  return (
   <div className="text-3xl text-center font-semibold m-12 p-12">
    তোমার সমস্যা সমাধান করা হয়েছে। বিস্তারিত নির্দেশনার জন্য README ফাইলটি দেখো।

<div className="text-2xl my-4 border-2 border-amber-500 p-5 rounded-b-lg ">

  তুমি ডাটা কনসোলে পেয়ে যাচ্ছো কিন্তু UI-তে দেখানো হচ্ছে না কারণ, যেখানে ডাটা রাখা হয়েছে সেখানে একটা রিফ্রেশ বা রিলোড প্রয়োজন। কিন্তু রিলোড দিলে context থেকে সব ডাটা মুছে যাবে এবং ডিফল্ট ডাটা দেখাবে। তাই তুমি map() ফাংশন না ব্যবহার করে, ওই কম্পোনেন্টের ভিতরেই আগেই ডাটা import করে নিয়ে আসো। এতে আর রেন্ডার করার প্রয়োজন পড়বে না।সেটা display-তে দেখা যাবে। আর একটা ভালো উপায় আছে, সেটা হলো lifting the state up।
</div>

    <div className="border-2 border-amber-500 p-5 rounded-b-lg">

        <h3 className="text-xl mb-4 underline mt-6">তোমার সমস্যা ✅ সমাধান&quot;</h3>
        <h4 className="text-xl mb-4 underline">Lifting the stete up</h4>
      👉 যখন তোমার দুইটা বা তার বেশি component-এর মধ্যে কোনো state শেয়ার করতে হয়, তখন সেই state টাকে উপরে (parent component-এ) নিয়ে যাওয়া লাগে।
এটাকেই বলে &quot;state কে উপরে তোলা&quot; বা lifting the state up।
        
    </div>
   </div>
  );
}
