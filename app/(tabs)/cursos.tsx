import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";

type CourseCardProps = {
  name: string;
  description: string;
  icon: string;
  color?: string;
};

function CourseCard({ name, description, icon, color }: CourseCardProps) {
  const cardColor = color || Colors.fatec.red;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.courseCard,
        pressed && styles.courseCardPressed,
      ]}
    >
      <View style={styles.courseHeader}>
        <View style={[styles.courseIconCircle, { backgroundColor: cardColor }]}>
          <Text style={styles.courseIcon}>{icon}</Text>
        </View>
        <View style={styles.courseTitleContainer}>
          <Text style={styles.courseTag}>TECNÓLOGO</Text>
          <Text style={styles.courseName}>{name}</Text>
        </View>
      </View>
      <Text style={styles.courseDescription}>{description}</Text>
    </Pressable>
  );
}

export default function Cursos() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nossos Cursos</Text>
        <Text style={styles.headerSubtitle}>
          Cursos Superiores de Tecnologia oferecidos pela FATEC Cotia
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoIcon}>🎓</Text>
          <Text style={styles.infoText}>
            Todos os cursos são <Text style={styles.infoBold}>gratuitos</Text> e
            reconhecidos pelo MEC
          </Text>
        </View>

        <View style={styles.coursesContainer}>
          <CourseCard
            name="Ciência de Dados"
            icon="📊"
            color="#0288D1"
            description="Formação em análise de dados, machine learning e estatística aplicada. Desenvolva habilidades para resolver problemas complexos através de dados e algoritmos."
          />

          <CourseCard
            name="Comércio Exterior"
            icon="🌍"
            color="#00897B"
            description="Planeje atividades internacionais, gerencie operações de importação e exportação, realize negociações globais e coordene toda a cadeia do comércio exterior."
          />

          <CourseCard
            name="Desenvolvimento de Software Multiplataforma"
            icon="💻"
            color="#5E35B1"
            description="Desenvolva software para Web, Desktop, Mobile e Nuvem. Aprenda sobre Inteligência Artificial, Segurança da Informação e Internet das Coisas."
          />

          <CourseCard
            name="Design de Produto"
            icon="✏️"
            color="#F57C00"
            description="Pesquise e desenvolva produtos industriais integrando equipes multidisciplinares. Domine conceitos estéticos, históricos, culturais e funcionais do design."
          />

          <CourseCard
            name="Gestão da Produção Industrial"
            icon="🏭"
            color="#C62828"
            description="Melhore qualidade e produtividade industrial, coordene equipes, aperfeiçoe processos logísticos e gerencie manutenção de máquinas e equipamentos."
          />

          <CourseCard
            name="Gestão Empresarial"
            icon="📈"
            color="#1565C0"
            description="Contribua para inovação e melhoria de processos, resolva problemas antecipadamente e atue nas diversas áreas de administração e negócios de forma ética e sustentável."
          />
        </View>

        <View style={styles.footerBox}>
          <Text style={styles.footerTitle}>📚 Quer saber mais?</Text>
          <Text style={styles.footerText}>
            Visite o site oficial da FATEC Cotia para informações sobre
            vestibular, grade curricular e processo seletivo.
          </Text>
          <Pressable style={styles.websiteButton}>
            <Text style={styles.websiteButtonText}>🌐 Acessar Site</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    backgroundColor: Colors.fatec.red,
    padding: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.fatec.white,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 22,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#A5D6A7",
  },
  infoIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: "#2E7D32",
    lineHeight: 20,
  },
  infoBold: {
    fontWeight: "700",
  },
  coursesContainer: {
    gap: 16,
  },
  courseCard: {
    backgroundColor: Colors.fatec.white,
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  courseCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  courseHeader: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  courseIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  courseIcon: {
    fontSize: 26,
  },
  courseTitleContainer: {
    flex: 1,
  },
  courseTag: {
    fontSize: 10,
    color: Colors.fatec.red,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  courseName: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.fatec.black,
    letterSpacing: -0.3,
    lineHeight: 22,
  },
  courseDescription: {
    fontSize: 13,
    color: "#666",
    lineHeight: 19,
  },
  footerBox: {
    backgroundColor: "#FFF9E6",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#FFE4A3",
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.fatec.black,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  websiteButton: {
    backgroundColor: Colors.fatec.red,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
  },
  websiteButtonText: {
    color: Colors.fatec.white,
    fontSize: 15,
    fontWeight: "700",
  },
});
