#!/bin/bash
echo "=== ИСПРАВЛЕНИЕ ВСЕХ ПУТЕЙ ==="

# Исправить href ссылки
find src/ -name "*.tsx" -exec sed -i '' 's|href="/login"|href="/itsolar/auth/login"|g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's|href="/register"|href="/itsolar/auth/register"|g' {} \;

# Исправить router.push
find src/ -name "*.tsx" -exec sed -i '' 's|router.push('\''/login'\'')|router.push('\''/itsolar/auth/login'\'')|g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's|router.push('\''/register'\'')|router.push('\''/itsolar/auth/register'\'')|g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's|router.push('\''/account/companies'\'')|router.push('\''/itsolar/dashboard/account/companies'\'')|g' {} \;

# Исправить API endpoints
find src/ -name "*.tsx" -exec sed -i '' 's|/api/auth/|/api/itsolar/auth/|g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's|/api/account/|/api/itsolar/account/|g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's|/api/company/|/api/itsolar/company/|g' {} \;

# Исправить redirect
find src/ -name "*.tsx" -exec sed -i '' 's|redirect('\''/login'\'')|redirect('\''/itsolar/auth/login'\'')|g' {} \;

echo "✅ Все пути исправлены!"
