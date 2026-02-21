import { useState } from "react";
import { TreePine, Trees, Mountain, Check, CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    id: "sapling",
    name: "The Sapling Guardian",
    price: "$25",
    icon: TreePine,
    description: "Funds the planting and 1-year care of a native tree.",
    features: [
      "One native tree planted",
      "1-year maintenance plan",
      "Digital thank-you card",
      "Quarterly growth updates",
    ],
  },
  {
    id: "architect",
    name: "The Forest Architect",
    price: "$100",
    icon: Trees,
    popular: true,
    description: "Funds a small cluster of trees with professional soil enrichment.",
    features: [
      "Cluster of 5 native trees",
      "Professional soil enrichment",
      "3-year maintenance plan",
      "Photo updates every season",
      "Named in our donor wall",
    ],
  },
  {
    id: "legacy",
    name: "The Legacy Grove",
    price: "$500",
    icon: Mountain,
    description: "A dedicated plot of trees monitored via satellite, with a digital certificate.",
    features: [
      "Dedicated grove of 25+ trees",
      "Satellite monitoring access",
      "5-year full maintenance",
      "Digital certificate signed by the Pandey Family",
      "Annual impact report",
      "Legacy plaque at planting site",
    ],
  },
];

type Step = "plans" | "details" | "payment" | "success";

const DonationSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("plans");
  const [formData, setFormData] = useState({ name: "", email: "", dedication: "" });
  const [paymentData, setPaymentData] = useState({ cardName: "", cardNumber: "", expiry: "", cvv: "" });
  const { toast } = useToast();

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);

  const handleSelectPlan = (id: string) => {
    setSelectedPlan(id);
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    setStep("payment");
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cardDigits = paymentData.cardNumber.replace(/\s/g, "");
    if (!paymentData.cardName.trim()) {
      toast({ title: "Please enter the cardholder name", variant: "destructive" });
      return;
    }
    if (cardDigits.length < 13 || cardDigits.length > 16) {
      toast({ title: "Please enter a valid card number", variant: "destructive" });
      return;
    }
    const expiryDigits = paymentData.expiry.replace("/", "");
    if (expiryDigits.length !== 4) {
      toast({ title: "Please enter a valid expiry date (MM/YY)", variant: "destructive" });
      return;
    }
    if (paymentData.cvv.length < 3 || paymentData.cvv.length > 4) {
      toast({ title: "Please enter a valid CVV", variant: "destructive" });
      return;
    }
    setStep("success");
    toast({ title: "Thank you for your generosity! 🌳", description: "The Pandey family sends their deepest gratitude." });
  };

  const resetFlow = () => {
    setSelectedPlan(null);
    setStep("plans");
    setFormData({ name: "", email: "", dedication: "" });
    setPaymentData({ cardName: "", cardNumber: "", expiry: "", cvv: "" });
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:outline-none";

  return (
    <section id="donate" className="py-24 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Make a Difference</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Impact
          </h2>
          <p className="text-muted-foreground text-lg">
            Every contribution directly funds the planting, care, and long-term survival of real trees. Pick the plan that resonates with you. 💚
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handleSelectPlan(plan.id)}
              className={`relative cursor-pointer rounded-2xl p-8 border-2 transition-all duration-300 ${
                selectedPlan === plan.id
                  ? "border-primary bg-background shadow-xl scale-[1.02]"
                  : "border-border bg-background hover:border-primary/40 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <plan.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-primary mb-4">{plan.price}</p>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Step: Details form */}
        {step === "details" && selectedPlanData && (
          <div className="max-w-lg mx-auto bg-background rounded-2xl p-8 border border-border shadow-lg animate-fade-in-up">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2 text-center">
              🌱 Your Details — {selectedPlanData.name}
            </h3>
            <p className="text-muted-foreground text-sm text-center mb-6">
              {selectedPlanData.price} — {selectedPlanData.description}
            </p>
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your full name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Dedication Message</label>
                <textarea
                  value={formData.dedication}
                  onChange={(e) => setFormData({ ...formData, dedication: e.target.value })}
                  className={`${inputClass} resize-none`}
                  rows={3}
                  placeholder="In honor of... / Dedicated to..."
                  maxLength={500}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-forest text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Continue to Payment →
              </button>
            </form>
          </div>
        )}

        {/* Step: Simulated Payment */}
        {step === "payment" && selectedPlanData && (
          <div className="max-w-lg mx-auto bg-background rounded-2xl p-8 border border-border shadow-lg animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Simulated Checkout
              </h3>
            </div>
            <p className="text-muted-foreground text-sm text-center mb-1">
              {selectedPlanData.name} — <span className="font-semibold text-primary">{selectedPlanData.price}</span>
            </p>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-6">
              <Lock className="h-3 w-3" />
              <span>This is a simulated payment — no real charges</span>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Cardholder Name *</label>
                <input
                  type="text"
                  value={paymentData.cardName}
                  onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                  className={inputClass}
                  placeholder="Name on card"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Card Number *</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({ ...paymentData, cardNumber: formatCardNumber(e.target.value) })}
                  className={inputClass}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Expiry *</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={paymentData.expiry}
                    onChange={(e) => setPaymentData({ ...paymentData, expiry: formatExpiry(e.target.value) })}
                    className={inputClass}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">CVV *</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                    className={inputClass}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-forest text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Complete Donation 🌳
              </button>
              <button
                type="button"
                onClick={() => setStep("details")}
                className="w-full text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                ← Back to details
              </button>
            </form>
          </div>
        )}

        {/* Step: Success */}
        {step === "success" && selectedPlanData && (
          <div className="max-w-lg mx-auto bg-background rounded-2xl p-8 border border-border shadow-lg text-center animate-fade-in-up">
            <div className="text-5xl mb-4">🌳</div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Thank You, {formData.name}!
            </h3>
            <p className="text-muted-foreground mb-4">
              Your {selectedPlanData.name} donation means the world to us and to the planet. The Pandey family sends their deepest gratitude. 💚
            </p>
            {formData.dedication && (
              <p className="italic text-primary border-t border-border pt-4 mt-4">
                "{formData.dedication}"
              </p>
            )}
            <button
              onClick={resetFlow}
              className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Make another donation
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DonationSection;
