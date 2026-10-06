import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

// Olive Branch Labs — Paycheck to Purpose + Bestie
// Replace this shell with your real Expo code

export default function App() {
  const [dti, setDti] = useState(32);
  const [means, setMeans] = useState(82);

  return (
    <ScrollView style={styles.bg} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.h1}>Paycheck to Purpose</Text>
      <Text style={styles.sub}>DTI Calculator • Payday Flow • Live Within Means % • Ghost Scanner • Purpose Plan</Text>

      <View style={styles.card}>
        <Text style={styles.label}>DTI: {dti}%</Text>
        <Text style={styles.muted}>Debt / Income — under 36% is healthy</Text>
        <Pressable style={styles.btn} onPress={() => setDti(Math.max(5, dti - 2))}><Text style={styles.btnT}>- Lower DTI</Text></Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Live Within Means: {means}%</Text>
        <Text style={styles.muted}>Aim 70-85% — rest is Purpose Plan</Text>
        <Pressable style={styles.btn} onPress={() => setMeans(Math.min(95, means + 1))}><Text style={styles.btnT}>+ Improve Means %</Text></Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Payday Flow</Text>
        <Text style={styles.muted}>Visual timeline of income → bills → purpose. Hook to Plaid.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Ghost Scanner</Text>
        <Text style={styles.muted}>Finds hidden subscriptions via Plaid transactions.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Purpose Plan</Text>
        <Text style={styles.muted}>Debt snowball, emergency fund, giving.</Text>
      </View>

      <View style={[styles.card, { borderColor: '#a78bfa' }]}>
        <Text style={[styles.label, { color: '#a78bfa' }]}>Bestie — Safe Phrase: bluebird day</Text>
        <Text style={styles.muted}>Hospital Big-Button Mode • FaceTime simulation • Bridge to World</Text>
      </View>

      <Text style={styles.footer}>Olive Branch Labs • Greenwood, IN • $850k Seed • olivebranchesout88@gmail.com</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#080808' },
  h1: { color: '#f5f5f0', fontSize: 28, fontWeight: '700', marginTop: 40 },
  sub: { color: '#9a9a96', marginTop: 8, marginBottom: 24, lineHeight: 20 },
  card: { backgroundColor: '#111', borderWidth: 1, borderColor: '#232323', borderRadius: 16, padding: 16, marginBottom: 14 },
  label: { color: '#f5f5f0', fontWeight: '600', fontSize: 16 },
  muted: { color: '#9a9a96', fontSize: 13, marginTop: 6, lineHeight: 18 },
  btn: { backgroundColor: '#10b981', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' },
  btnT: { color: '#000', fontWeight: '700' },
  footer: { color: '#5a5a56', fontSize: 11, textAlign: 'center', marginTop: 32, marginBottom: 80 }
});
