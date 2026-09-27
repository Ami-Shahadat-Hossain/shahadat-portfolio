import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

const gallerySections = [
  {
    id: "erp",
    title: "HKD ERP & Business Systems",
    description:
      "Selected interfaces and workflows from ERP and business management applications.",
    images: [
      {
        title: "ERP Dashboard",
        image: "/assets/images/hkd-erp/dashboard.png",
      },
      {
        title: "Development Style & BOM Management & Assigning",
        image: "/assets/images/hkd-erp/assigning.png",
      },
      {
        title: "BOM Management",
        image: "/assets/images/hkd-erp/bom_list.png",
      },
      {
        title: "Purchase Order Management",
        image: "/assets/images/hkd-erp/po.png",
      },
      {
        title: "PO Tracking",
        image: "/assets/images/hkd-erp/po_tracking.png",
      },
      {
        title: "All Tracking Progress",
        image: "/assets/images/hkd-erp/tracking_progress.png",
      },
    ],
  },

  {
    id: "web",
    title: "Web Applications",
    description:
      "Web applications and business platforms developed for real-world use.",
    images: [
      {
        title: "RATC-PMS",
        image: "/assets/images/pms/dashboard.png",
      },
      {
        title: "Health Support BD",
        image: "/assets/images/health-support-bd/dashboard.png",
      },
    ],
  },

  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Customer-facing e-commerce interfaces and supporting business workflows.",
    images: [
      {
        title: "E-Commerce Dashboard",
        image: "/assets/images/ecommerce/dashboard.png",
      },
      {
        title: "E-Commerce Admin Dashboard",
        image: "/assets/images/ecommerce/admin-dashboard.png",
      },
    ],
  },

  {
    id: "documents",
    title: "Business Documents",
    description:
      "Modern business document workflows including challans, invoices, and receipts.",
    images: [
      {
        title: "Dashboard",
        image: "/assets/images/business-documents/challan.png",
      },
      {
        title: "Challan",
        image: "/assets/images/business-documents/challan.png",
      },
      {
        title: "Invoice",
        image: "/assets/images/business-documents/invoice.png",
      },
      {
        title: "Money Receipt",
        image: "/assets/images/business-documents/money_receipt.png",
      },
    ],
  },
  {
    id: "others",
    title: "Others",
    description:
      "Additional interfaces, dashboards, and supporting features developed across different web applications.",
    images: [
      {
        title: "Nothi Filter",
        image: "/assets/images/others/nothi_filter.png",
      },
      {
        title: "Nothi Search",
        image: "/assets/images/others/nothi_search.png",
      },
    ],
  },
];

const ProjectGallerySection = () => {
  const [activeSection, setActiveSection] = useState("erp");
  const [selectedImage, setSelectedImage] = useState(null);

  const activeGallery = gallerySections.find(
    (section) => section.id === activeSection,
  );

  return (
    <section id="gallery" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-4">Project Gallery</h2>

          <p className="text-muted-foreground font-mono text-sm mb-8">
            A visual collection of selected interfaces, workflows, and
            applications I have worked on.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {gallerySections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Section Description */}
          <div className="mb-6">
            <h3 className="font-mono font-semibold text-lg text-foreground">
              {activeGallery.title}
            </h3>

            <p className="text-muted-foreground text-sm font-mono mt-2">
              {activeGallery.description}
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeGallery.images.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelectedImage(item)}
                className="group text-left rounded-xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <h4 className="font-mono text-sm font-medium text-foreground">
                    {item.title}
                  </h4>

                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />

            <p className="text-white font-mono text-sm text-center mt-3">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallerySection;
