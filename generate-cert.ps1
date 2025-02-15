$cert = New-SelfSignedCertificate -DnsName "localhost" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(10) -FriendlyName "UGESM Development Certificate"

$pwd = ConvertTo-SecureString -String "password" -Force -AsPlainText

$path = ".\localhost.pfx"
Export-PfxCertificate -Cert $cert -FilePath $path -Password $pwd

$path = ".\localhost.pem"
$bytes = [System.IO.File]::ReadAllBytes(".\localhost.pfx")
$base64 = [System.Convert]::ToBase64String($bytes)
[System.IO.File]::WriteAllText($path, "-----BEGIN CERTIFICATE-----`n" + $base64 + "`n-----END CERTIFICATE-----")

$path = ".\localhost-key.pem"
$bytes = [System.IO.File]::ReadAllBytes(".\localhost.pfx")
$base64 = [System.Convert]::ToBase64String($bytes)
[System.IO.File]::WriteAllText($path, "-----BEGIN PRIVATE KEY-----`n" + $base64 + "`n-----END PRIVATE KEY-----")
