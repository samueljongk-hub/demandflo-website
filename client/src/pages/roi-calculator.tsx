import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, Target, ArrowRight, BarChart3, Users, Zap, RefreshCcw } from "lucide-react";
import { useLocation } from "wouter";

export default function RoiCalculator() {
  const [, setLocation] = useLocation();
  const [inputs, setInputs] = useState({
    sdrSalary: 100000,
    additionalCosts: 20000,
    currentAppointments: 6,
    contractValue: 20000,
    closeRate: 20
  });

  const [calculated, setCalculated] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
    setCalculated(false);
  };

  const calculate = () => {
    setCalculated(true);
  };

  const reset = () => {
    setInputs({
      sdrSalary: 100000,
      additionalCosts: 20000,
      currentAppointments: 6,
      contractValue: 20000,
      closeRate: 20
    });
    setCalculated(false);
  };

  // Current model calculations
  const currentMonthlyCost = (inputs.sdrSalary + inputs.additionalCosts) / 12;
  const currentCostPerAppointment = inputs.currentAppointments > 0 ? currentMonthlyCost / inputs.currentAppointments : 0;
  const currentPipelineValue = inputs.currentAppointments * inputs.contractValue;
  const currentClosedValue = currentPipelineValue * (inputs.closeRate / 100);
  const currentROI = currentMonthlyCost > 0 ? ((currentClosedValue - currentMonthlyCost) / currentMonthlyCost) * 100 : 0;

  // Demand Flo model calculations (based on $500 per appointment)
  const demandFloAppointments = Math.max(inputs.currentAppointments, 10); // At least 10 appointments
  const demandFloCostPerAppointment = 500; // Fixed at $500 per appointment 
  const demandFloMonthlyCost = demandFloAppointments * demandFloCostPerAppointment;
  const demandFloPipelineValue = demandFloAppointments * inputs.contractValue;
  const demandFloClosedValue = demandFloPipelineValue * (inputs.closeRate / 100);
  const demandFloROI = demandFloMonthlyCost > 0 ? ((demandFloClosedValue - demandFloMonthlyCost) / demandFloMonthlyCost) * 100 : 0;

  // Comparison metrics
  const monthlySavings = currentMonthlyCost - demandFloMonthlyCost;
  const annualSavings = monthlySavings * 12;
  const costEfficiency = currentCostPerAppointment > 0 ? ((currentCostPerAppointment - demandFloCostPerAppointment) / currentCostPerAppointment) * 100 : 0;
  const roiImprovement = demandFloROI - currentROI;
  const appointmentIncrease = demandFloAppointments - inputs.currentAppointments;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen pt-16" data-testid="roi-calculator-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6" data-testid="roi-calculator-title">
              ROI <span className="gradient-text">Impact Calculator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="roi-calculator-description">
              Discover exactly how much you could save and how many more qualified calls you'd get by switching from traditional SDRs to our proven system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Input Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-2 border-primary/10">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
                  <Target className="h-7 w-7 text-primary" />
                  Your Current Sales Model
                </CardTitle>
                <CardDescription className="text-lg">
                  Enter your current setup details below and we'll show you the exact impact of switching to Demand Flo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="sdrSalary" className="text-sm font-semibold text-foreground">SDR Annual Salary</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                      <Input
                        id="sdrSalary"
                        type="number"
                        value={inputs.sdrSalary}
                        onChange={(e) => handleInputChange('sdrSalary', e.target.value)}
                        className="pl-10 h-12 text-lg border-2 focus:border-primary/50"
                        data-testid="input-sdr-salary"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="additionalCosts" className="text-sm font-semibold text-foreground">Additional Annual Costs</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                      <Input
                        id="additionalCosts"
                        type="number"
                        value={inputs.additionalCosts}
                        onChange={(e) => handleInputChange('additionalCosts', e.target.value)}
                        className="pl-10 h-12 text-lg border-2 focus:border-primary/50"
                        data-testid="input-additional-costs"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Tools, training, benefits, etc.</p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="currentAppointments" className="text-sm font-semibold text-foreground">Current Monthly Appointments</Label>
                    <Input
                      id="currentAppointments"
                      type="number"
                      value={inputs.currentAppointments}
                      onChange={(e) => handleInputChange('currentAppointments', e.target.value)}
                      className="h-12 text-lg border-2 focus:border-primary/50"
                      data-testid="input-current-appointments"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="contractValue" className="text-sm font-semibold text-foreground">Average Contract Value</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                      <Input
                        id="contractValue"
                        type="number"
                        value={inputs.contractValue}
                        onChange={(e) => handleInputChange('contractValue', e.target.value)}
                        className="pl-10 h-12 text-lg border-2 focus:border-primary/50"
                        data-testid="input-contract-value"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <Label htmlFor="closeRate" className="text-sm font-semibold text-foreground">Close Rate (%)</Label>
                    <Input
                      id="closeRate"
                      type="number"
                      value={inputs.closeRate}
                      onChange={(e) => handleInputChange('closeRate', e.target.value)}
                      className="h-12 text-lg border-2 focus:border-primary/50"
                      max="100"
                      data-testid="input-close-rate"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={calculate}
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-6"
                    data-testid="button-calculate"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate My ROI Impact
                  </Button>
                  <Button
                    onClick={reset}
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-muted/50 text-lg py-6"
                    data-testid="button-reset"
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {calculated && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                Your <span className="gradient-text">ROI Impact</span> Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Here's the exact financial impact of switching to our proven system
              </p>
            </motion.div>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Monthly Savings</h3>
                  <p className="text-3xl font-bold text-green-600" data-testid="monthly-savings">
                    {formatCurrency(monthlySavings)}
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Appointments</h3>
                  <p className="text-3xl font-bold text-blue-600" data-testid="total-appointments">
                    {demandFloAppointments}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">qualified calls/month</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Cost Efficiency</h3>
                  <p className="text-3xl font-bold text-purple-600">
                    {formatPercentage(costEfficiency)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">reduction</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">ROI Improvement</h3>
                  <p className="text-3xl font-bold text-orange-600">
                    +{formatPercentage(roiImprovement)}
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Detailed Comparison */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Current Model */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-muted-foreground flex items-center justify-center gap-2">
                      <Target className="h-6 w-6" />
                      Your Current Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Monthly cost</span>
                        <span className="font-semibold text-lg">{formatCurrency(currentMonthlyCost)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Cost per appointment</span>
                        <span className="font-semibold text-lg">{formatCurrency(currentCostPerAppointment)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Monthly appointments</span>
                        <span className="font-semibold text-lg">{inputs.currentAppointments}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Pipeline value</span>
                        <span className="font-semibold text-lg">{formatCurrency(currentPipelineValue)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm">ROI</span>
                        <span className="font-semibold text-lg">{formatPercentage(currentROI)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Demand Flo Model */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                      <Zap className="h-6 w-6" />
                      Demand Flo Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Monthly investment</span>
                        <span className="font-semibold text-lg text-primary">{formatCurrency(demandFloMonthlyCost)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Cost per appointment</span>
                        <span className="font-semibold text-lg text-primary">{formatCurrency(demandFloCostPerAppointment)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Guaranteed appointments</span>
                        <span className="font-semibold text-lg text-primary">{demandFloAppointments}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm">Pipeline value</span>
                        <span className="font-semibold text-lg text-primary">{formatCurrency(demandFloPipelineValue)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm">ROI</span>
                        <span className="font-semibold text-lg text-primary">{formatPercentage(demandFloROI)}</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/80 dark:bg-black/20 rounded-lg border border-primary/20">
                      <p className="text-xs text-muted-foreground text-center">
                        Analysis assumes {formatCurrency(demandFloCostPerAppointment)} per confirmed appointment with a minimum of {Math.max(inputs.currentAppointments, 10)} monthly appointments. Calculations use your {inputs.closeRate}% close rate and ${inputs.contractValue.toLocaleString()} contract value.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Annual Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-foreground mb-4">12-Month Financial Impact</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Annual Savings</p>
                    <p className="text-4xl font-bold text-green-600" data-testid="annual-savings">
                      {formatCurrency(annualSavings)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Additional Pipeline Value</p>
                    <p className="text-4xl font-bold text-blue-600">
                      {formatCurrency((demandFloPipelineValue - currentPipelineValue) * 12)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Extra Revenue Potential</p>
                    <p className="text-4xl font-bold text-purple-600">
                      {formatCurrency((demandFloClosedValue - currentClosedValue) * 12)}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Start Getting These Results?
                </h2>
                <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  Book a strategy call to discuss how these numbers apply to your specific business and get started with your customized growth plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 transition-colors font-semibold px-8 py-4 text-lg"
                    onClick={() => setLocation('/contact')}
                    data-testid="button-book-strategy-call"
                  >
                    Book Your Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}