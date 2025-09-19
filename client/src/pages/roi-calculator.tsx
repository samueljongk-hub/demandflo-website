import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, Target, ArrowRight } from "lucide-react";

export default function RoiCalculator() {
  const [inputs, setInputs] = useState({
    sdrSalary: 75000,
    additionalCosts: 35000,
    currentAppointments: 8,
    contractValue: 15000,
    closeRate: 25
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
      sdrSalary: 75000,
      additionalCosts: 35000,
      currentAppointments: 8,
      contractValue: 15000,
      closeRate: 25
    });
    setCalculated(false);
  };

  // Current model calculations
  const currentMonthlyCost = (inputs.sdrSalary + inputs.additionalCosts) / 12;
  const currentCostPerAppointment = inputs.currentAppointments > 0 ? currentMonthlyCost / inputs.currentAppointments : 0;
  const currentPipelineValue = inputs.currentAppointments * inputs.contractValue;
  const currentClosedValue = currentPipelineValue * (inputs.closeRate / 100);
  const currentROI = currentMonthlyCost > 0 ? ((currentClosedValue - currentMonthlyCost) / currentMonthlyCost) * 100 : 0;

  // Demand Flo model calculations  
  const demandFloMonthlyCost = 4000; // Base pricing
  const demandFloAppointments = Math.max(inputs.currentAppointments, 10); // At least 10 appointments
  const demandFloCostPerAppointment = demandFloMonthlyCost / demandFloAppointments;
  const demandFloPipelineValue = demandFloAppointments * inputs.contractValue;
  const demandFloClosedValue = demandFloPipelineValue * (inputs.closeRate / 100);
  const demandFloROI = ((demandFloClosedValue - demandFloMonthlyCost) / demandFloMonthlyCost) * 100;

  // Comparison metrics
  const monthlySavings = currentMonthlyCost - demandFloMonthlyCost;
  const annualSavings = monthlySavings * 12;
  const costEfficiency = currentCostPerAppointment > 0 ? ((currentCostPerAppointment - demandFloCostPerAppointment) / currentCostPerAppointment) * 100 : 0;
  const roiImprovement = demandFloROI - currentROI;

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
    <div className="min-h-screen pt-16 pb-12" data-testid="roi-calculator-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6" data-testid="roi-calculator-title">
            Calculate Your <span className="gradient-text">Sales ROI Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="roi-calculator-description">
            See how Demand Flo compares to a traditional SDR setup—costs, appointments, and ROI—based on your numbers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Your Current Model
                </CardTitle>
                <CardDescription>
                  Update any field and click calculate. We'll compare your current approach vs. Demand Flo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="sdrSalary">SDR Annual Salary</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="sdrSalary"
                      type="number"
                      value={inputs.sdrSalary}
                      onChange={(e) => handleInputChange('sdrSalary', e.target.value)}
                      className="pl-10"
                      data-testid="input-sdr-salary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalCosts">Additional Costs (benefits, tools, management)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="additionalCosts"
                      type="number"
                      value={inputs.additionalCosts}
                      onChange={(e) => handleInputChange('additionalCosts', e.target.value)}
                      className="pl-10"
                      data-testid="input-additional-costs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentAppointments">Monthly Qualified Appointments (current)</Label>
                  <Input
                    id="currentAppointments"
                    type="number"
                    value={inputs.currentAppointments}
                    onChange={(e) => handleInputChange('currentAppointments', e.target.value)}
                    data-testid="input-current-appointments"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contractValue">Average Contract Value</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="contractValue"
                      type="number"
                      value={inputs.contractValue}
                      onChange={(e) => handleInputChange('contractValue', e.target.value)}
                      className="pl-10"
                      data-testid="input-contract-value"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="closeRate">Close Rate from Appointments (%)</Label>
                  <Input
                    id="closeRate"
                    type="number"
                    value={inputs.closeRate}
                    onChange={(e) => handleInputChange('closeRate', e.target.value)}
                    data-testid="input-close-rate"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={calculate} 
                    className="gradient-primary text-white flex-1"
                    data-testid="button-calculate"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Calculate my ROI
                  </Button>
                  <Button variant="outline" onClick={reset} data-testid="button-reset">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {calculated && (
              <>
                {/* Quick Snapshot */}
                <Card>
                  <CardHeader>
                    <CardTitle>Snapshot</CardTitle>
                    <CardDescription>Your high-level numbers at a glance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Current monthly cost</p>
                        <p className="font-semibold" data-testid="current-monthly-cost">{formatCurrency(currentMonthlyCost)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Demand Flo monthly cost</p>
                        <p className="font-semibold text-primary" data-testid="demandplo-monthly-cost">{formatCurrency(demandFloMonthlyCost)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Cost / appointment (current)</p>
                        <p className="font-semibold" data-testid="current-cost-per-appointment">{formatCurrency(currentCostPerAppointment)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Cost / appointment (Demand Flo)</p>
                        <p className="font-semibold text-primary" data-testid="demandflo-cost-per-appointment">{formatCurrency(demandFloCostPerAppointment)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Comparison */}
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-muted-foreground">Current Model</CardTitle>
                      <CardDescription>Traditional SDR or outsourced team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Monthly investment</span>
                          <span className="font-semibold">{formatCurrency(currentMonthlyCost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost per appointment</span>
                          <span className="font-semibold">{formatCurrency(currentCostPerAppointment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly appointments</span>
                          <span className="font-semibold">{inputs.currentAppointments}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pipeline value generated</span>
                          <span className="font-semibold">{formatCurrency(currentPipelineValue)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Return on investment</span>
                          <span className="font-semibold">{formatPercentage(currentROI)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle className="text-primary">Demand Flo</CardTitle>
                      <CardDescription>AI-powered hyper-personalization at scale</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Monthly investment</span>
                          <span className="font-semibold text-primary">{formatCurrency(demandFloMonthlyCost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost per appointment</span>
                          <span className="font-semibold text-primary">{formatCurrency(demandFloCostPerAppointment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guaranteed appointments</span>
                          <span className="font-semibold text-primary">{demandFloAppointments}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pipeline value generated</span>
                          <span className="font-semibold text-primary">{formatCurrency(demandFloPipelineValue)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Return on investment</span>
                          <span className="font-semibold text-primary">{formatPercentage(demandFloROI)}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        Pricing shown assumes minimum {demandFloAppointments} confirmed-call appointments per month at ${demandFloMonthlyCost/demandFloAppointments} per appointment.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Financial Impact */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Financial Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Monthly savings</p>
                        <p className="text-2xl font-bold text-green-600" data-testid="monthly-savings">
                          {formatCurrency(monthlySavings)}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Annual savings</p>
                        <p className="text-2xl font-bold text-green-600" data-testid="annual-savings">
                          {formatCurrency(annualSavings)}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Cost efficiency</p>
                        <p className="text-xl font-bold text-primary">
                          {formatPercentage(costEfficiency)} reduction
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">ROI improvement</p>
                        <p className="text-xl font-bold text-primary">
                          +{formatPercentage(roiImprovement)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="text-center bg-gradient-to-r from-primary to-accent text-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                    <p className="mb-4 opacity-90">
                      Book a call to discuss how these numbers apply to your specific situation
                    </p>
                    <Button variant="secondary" size="lg" className="text-primary" data-testid="button-book-call">
                      Book Your Strategy Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}