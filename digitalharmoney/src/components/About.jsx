const About = () => {
    return (
      <section id="about" className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-amber-400/20">
              <p className="text-lg mb-4">Digital Harmony is a leading provider of advanced holographic and LED display systems. With a commitment to excellence and innovation, we offer a comprehensive range of products and services designed to transform the way people interact with visual content.</p>
              <p className="text-lg mb-4">Our mission is to provide cutting-edge technology, exceptional service, and tailored solutions to elevate our clients' brands and captivate their audiences.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-amber-400/20">
              <h3 className="text-xl font-semibold mb-4 text-right">عن الشركة</h3>
              <p className="text-lg mb-4 text-right">تعد شركة Digital Harmony شركة رائدة في مجال توفير أنظمة العرض الثلاثية الأبعاد وشاشات LED المتقدمة. مع الالتزام بالتميز والابتكار، نقدم مجموعة شاملة من المنتجات والخدمات المصممة لتغيير طريقة تفاعل الأشخاص مع المحتوى المرئي[1].</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default About;
