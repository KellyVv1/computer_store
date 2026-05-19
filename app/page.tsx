"use client";

import { useState } from "react";

type Product = {
  name: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  specs: string[];
  price: string;
  oldPrice: string;
};

const categories = [
  {
    title: "商务办公",
    description: "轻薄便携、长续航、稳定售后，适合日常办公和会议出差。",
    iconClass: "icon-use-business",
    alt: "商务办公电脑图标"
  },
  {
    title: "电竞游戏",
    description: "高刷屏、独显、强散热，热门网游和 3A 大作都能稳住帧率。",
    iconClass: "icon-use-gaming",
    alt: "电竞游戏电脑图标"
  },
  {
    title: "设计创作",
    description: "大内存、高色域屏、专业显卡，适合剪辑、建模和平面设计。",
    iconClass: "icon-use-creative",
    alt: "设计创作电脑图标"
  },
  {
    title: "整机装配",
    description: "从 CPU 到机箱风道完整搭配，现场装机、压力测试后交付。",
    iconClass: "icon-use-build",
    alt: "整机装配电脑图标"
  }
];

const products: Product[] = [
  {
    name: "AirPro 14 轻薄办公本",
    description: "14 英寸高色域屏，适合文档、网课、财务软件和移动办公。",
    image: "/assets/product-laptop.jpg",
    alt: "轻薄办公笔记本电脑",
    badge: "热销",
    specs: ["i5 处理器", "16GB 内存", "1TB SSD"],
    price: "¥4,299",
    oldPrice: "¥4,899"
  },
  {
    name: "Nova X 电竞台式主机",
    description: "高性能独显与风冷方案，适合主流竞技游戏和直播录制。",
    image: "/assets/product-gaming-pc.jpg",
    alt: "电竞游戏台式电脑",
    badge: "限时",
    specs: ["R7 处理器", "RTX 4060", "32GB 内存"],
    price: "¥6,999",
    oldPrice: "¥7,699"
  },
  {
    name: "Studio Max 创作工作站",
    description: "面向视频剪辑、三维设计和多任务生产力，支持定制升级。",
    image: "/assets/product-workstation.jpg",
    alt: "设计师工作站电脑",
    badge: "推荐",
    specs: ["i7 处理器", "RTX 4070", "2TB SSD"],
    price: "¥10,899",
    oldPrice: "¥11,999"
  }
];

const features = [
  {
    title: "现场验机与压力测试",
    description: "开箱检查屏幕、硬盘、电池和性能，确认无误后再交付。",
    image: "/assets/luxury-service-test.png",
    alt: "现场验机与压力测试图标"
  },
  {
    title: "旧机置换与数据迁移",
    description: "旧电脑估价抵扣，新机同步资料，换机过程更顺畅。",
    image: "/assets/luxury-service-trade.png",
    alt: "旧机置换与数据迁移图标"
  },
  {
    title: "个性化装机方案",
    description: "按预算、游戏、设计软件或办公场景搭配硬件和外设。",
    image: "/assets/luxury-service-config.png",
    alt: "个性化装机方案图标"
  }
];

const services = [
  {
    title: "免费配置咨询",
    description: "根据专业软件、游戏、预算和使用年限推荐合理配置。"
  },
  {
    title: "系统与软件安装",
    description: "新机初始化、驱动安装、办公软件部署和常用设置优化。"
  },
  {
    title: "硬件升级维修",
    description: "内存、硬盘、显卡升级，清灰维护，故障检测与报价维修。"
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [comparedProducts, setComparedProducts] = useState<Set<string>>(
    () => new Set()
  );

  function handleCompare(name: string) {
    setComparedProducts((current) => {
      const next = new Set(current);
      next.add(name);
      return next;
    });
    window.setTimeout(() => {
      window.alert(`${name} 已加入对比清单，欢迎到店查看详细配置。`);
    }, 80);
  }

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>全场电脑支持验机、装机、系统调试</span>
          <span>服务热线：400-668-2026 ｜ 今日下单最快 2 小时送达</span>
        </div>
      </div>

      <header>
        <nav className={`nav${isMenuOpen ? " open" : ""}`} id="nav">
          <a className="logo" href="#">
            <span className="logo-mark">星</span>
            <span>星启电脑</span>
          </a>
          <button
            className="mobile-menu"
            type="button"
            aria-label="打开菜单"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
          <div className="nav-links">
            <a href="#products">热卖电脑</a>
            <a href="#categories">产品分类</a>
            <a href="#services">门店服务</a>
            <a href="#contact">联系我们</a>
          </div>
          <div className="nav-actions">
            <a className="btn btn-soft" href="#products">
              查看现货
            </a>
            <a className="btn btn-primary" href="#contact">
              预约装机
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">开学季与办公升级专场</span>
            <h1>从轻薄本到高性能主机，一站配齐。</h1>
            <p>
              精选品牌笔记本、电竞台式机、设计工作站和办公套装。支持现场验机、配置咨询、旧机置换和门店售后。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">
                选购热卖机型
              </a>
              <a className="btn btn-soft" href="#services">
                了解门店服务
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>320+</strong>
                <span>现货机型与配件</span>
              </div>
              <div className="stat">
                <strong>24h</strong>
                <span>快速检测与售后响应</span>
              </div>
              <div className="stat">
                <strong>3年</strong>
                <span>可选延保与维护方案</span>
              </div>
            </div>
          </div>
        </section>

        <section id="categories">
          <div className="section-inner">
            <div className="section-title">
              <div>
                <h2>按用途快速选电脑</h2>
                <p>
                  不需要背参数。告诉我们你的预算和用途，店员会给出合适配置，避免性能浪费或后期不够用。
                </p>
              </div>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <article className="category" key={category.title}>
                  <div className={`luxury-icon ${category.iconClass}`}>
                    <img
                      src="/assets/luxury-use-cases.png"
                      alt={category.alt}
                    />
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products">
          <div className="section-inner">
            <div className="section-title">
              <div>
                <h2>本周热卖电脑</h2>
                <p>价格仅作页面展示，可根据库存、配置和活动灵活调整。</p>
              </div>
              <a className="btn btn-soft" href="#contact">
                获取完整报价单
              </a>
            </div>

            <div className="product-grid">
              {products.map((product) => {
                const isCompared = comparedProducts.has(product.name);

                return (
                  <article className="product" key={product.name}>
                    <div className="product-media">
                      <img src={product.image} alt={product.alt} />
                      <span className="badge">{product.badge}</span>
                    </div>
                    <div className="product-body">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="specs">
                        {product.specs.map((spec) => (
                          <span key={spec}>{spec}</span>
                        ))}
                      </div>
                      <div className="price-row">
                        <div>
                          <span className="price">{product.price}</span>
                          <span className="old-price">{product.oldPrice}</span>
                        </div>
                        <button
                          className={`btn compare${
                            isCompared ? " compared" : ""
                          }`}
                          type="button"
                          onClick={() => handleCompare(product.name)}
                        >
                          {isCompared ? "已加入" : "加入对比"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="feature-band">
          <div className="section-inner feature-layout">
            <div className="feature-copy">
              <span className="eyebrow">为什么选择星启电脑</span>
              <h2>买前懂配置，买后有人管。</h2>
              <p>
                我们把电脑销售、配件升级、数据迁移、系统安装和售后维护放在同一个门店流程里，让每一次购买更省心。
              </p>
            </div>
            <div className="feature-list">
              {features.map((feature) => (
                <div className="feature-item" key={feature.title}>
                  <div className="luxury-icon service-icon">
                    <img src={feature.image} alt={feature.alt} />
                  </div>
                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-inner">
            <div className="section-title">
              <div>
                <h2>门店服务</h2>
                <p>不只是卖电脑，也解决电脑从购买到使用中的各种问题。</p>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="section-inner cta-box">
            <div>
              <h2>告诉我们你的预算和用途</h2>
              <p>门店顾问会给你 2-3 套配置建议，并说明每套方案适合谁。</p>
            </div>
            <a className="btn btn-soft" href="tel:4006682026">
              立即电话咨询
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>星启电脑销售店 ｜ 地址：科技数码城 A 座 3F-318</span>
          <span>
            营业时间：10:00 - 21:00 ｜ 售后邮箱：service@xingqi-pc.example
          </span>
        </div>
      </footer>
    </>
  );
}
